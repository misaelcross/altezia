type LogLevel = 'info' | 'warn' | 'error'

interface LogMessage {
  level: LogLevel
  message: string
  timestamp: string
  data?: any
}

export const logger = {
  info: (message: string, data?: any) => {
    log('info', message, data)
  },
  warn: (message: string, data?: any) => {
    log('warn', message, data)
  },
  error: (message: string, data?: any) => {
    log('error', message, data)
  },
}

function log(level: LogLevel, message: string, data?: any) {
  const logMessage: LogMessage = {
    level,
    message,
    timestamp: new Date().toISOString(),
    data,
  }

  // Em produção, você pode enviar os logs para um serviço de logging
  if (process.env.NODE_ENV === 'production') {
    // TODO: Implementar envio para serviço de logging
    console.log(JSON.stringify(logMessage))
  } else {
    console.log(`[${logMessage.timestamp}] ${level.toUpperCase()}: ${message}`)
    if (data) {
      console.log('Data:', data)
    }
  }
}
