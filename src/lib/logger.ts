type LogLevel = 'info' | 'warn' | 'error'

interface LogMessage {
  level: LogLevel
  message: string
  timestamp: string
  data?: any
}

const log = (level: LogLevel, message: string, data?: any) => {
  const logMessage: LogMessage = {
    level,
    message,
    timestamp: new Date().toISOString(),
    data,
  }

  if (typeof window !== 'undefined') {
    // Client-side logging
    switch (level) {
      case 'info':
        console.log(message, data)
        break
      case 'warn':
        console.warn(message, data)
        break
      case 'error':
        console.error(message, data)
        break
    }
  } else {
    // Server-side logging
    console[level](message, data)
  }
}

export const logger = {
  info: (message: string, data?: any) => log('info', message, data),
  warn: (message: string, data?: any) => log('warn', message, data),
  error: (message: string, data?: any) => log('error', message, data),
}
