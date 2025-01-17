import { SupabaseClient } from '@supabase/supabase-js'
import { logger } from '@/lib/logger'

export function withLogging(supabase: SupabaseClient) {
  const originalFrom = supabase.from.bind(supabase)

  // Intercepta todas as operações do banco de dados
  supabase.from = (table: string) => {
    const queryBuilder = originalFrom(table)
    const originalInsert = queryBuilder.insert.bind(queryBuilder)
    const originalUpdate = queryBuilder.update.bind(queryBuilder)
    const originalDelete = queryBuilder.delete.bind(queryBuilder)
    const originalUpsert = queryBuilder.upsert.bind(queryBuilder)

    // Intercepta operações de inserção
    queryBuilder.insert = async function (values: any) {
      logger.info(`Iniciando inserção na tabela ${table}`, { table, values })
      const result = await originalInsert(values)
      if (result.error) {
        logger.error(`Erro na inserção na tabela ${table}`, { table, error: result.error })
      } else {
        logger.info(`Inserção bem-sucedida na tabela ${table}`, { table, count: result.data?.length })
      }
      return result
    }

    // Intercepta operações de atualização
    queryBuilder.update = async function (values: any) {
      logger.info(`Iniciando atualização na tabela ${table}`, { table, values })
      const result = await originalUpdate(values)
      if (result.error) {
        logger.error(`Erro na atualização na tabela ${table}`, { table, error: result.error })
      } else {
        logger.info(`Atualização bem-sucedida na tabela ${table}`, { table, count: result.data?.length })
      }
      return result
    }

    // Intercepta operações de deleção
    queryBuilder.delete = async function () {
      logger.warn(`Iniciando deleção na tabela ${table}`, { table })
      const result = await originalDelete()
      if (result.error) {
        logger.error(`Erro na deleção na tabela ${table}`, { table, error: result.error })
      } else {
        logger.info(`Deleção bem-sucedida na tabela ${table}`, { table, count: result.data?.length })
      }
      return result
    }

    // Intercepta operações de upsert
    queryBuilder.upsert = async function (values: any) {
      logger.info(`Iniciando upsert na tabela ${table}`, { table, values })
      const result = await originalUpsert(values)
      if (result.error) {
        logger.error(`Erro no upsert na tabela ${table}`, { table, error: result.error })
      } else {
        logger.info(`Upsert bem-sucedido na tabela ${table}`, { table, count: result.data?.length })
      }
      return result
    }

    return queryBuilder
  }

  return supabase
}
