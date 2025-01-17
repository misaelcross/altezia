import { createContext, useContext, useEffect } from 'react'
import { logger } from '@/lib/logger'

interface AppStateLoggerProps {
  children: React.ReactNode
  state: any
  name: string
}

const StateContext = createContext<null>(null)

export function AppStateLogger({ children, state, name }: AppStateLoggerProps) {
  useEffect(() => {
    logger.info(`Estado '${name}' atualizado`, {
      component: name,
      newState: state
    })
  }, [state, name])

  return <StateContext.Provider value={null}>{children}</StateContext.Provider>
}

// Exemplo de uso:
// <AppStateLogger state={memberState} name="MemberState">
//   <MemberList members={memberState.members} />
// </AppStateLogger>
