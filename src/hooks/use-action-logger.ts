'use client'

import { logger } from '@/lib/logger'

interface ActionLoggerOptions {
  component: string
  action: string
  data?: any
}

export function useActionLogger() {
  const logAction = ({ component, action, data }: ActionLoggerOptions) => {
    logger.info(`Ação do usuário: ${action}`, {
      component,
      action,
      data,
      timestamp: new Date().toISOString()
    })
  }

  return { logAction }
}

// Exemplo de uso em um componente:
// const { logAction } = useActionLogger()
//
// function handleDeleteMember(memberId: string) {
//   logAction({
//     component: 'MemberList',
//     action: 'delete_member',
//     data: { memberId }
//   })
//   // ... resto da lógica
// }
