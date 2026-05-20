import { readFileSync } from 'fs'
import { join } from 'path'

export default function Page() {
  const htmlContent = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf-8')
  
  // Extract styles
  const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/i)
  const styles = styleMatch ? styleMatch[1] : ''
  
  // Extract body content (everything between <body> and </body>, excluding the script at the end)
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  let bodyContent = bodyMatch ? bodyMatch[1] : ''
  
  // Extract script content
  const scriptMatch = bodyContent.match(/<script>([\s\S]*?)<\/script>/i)
  const scriptContent = scriptMatch ? scriptMatch[1] : ''
  
  // Remove script from body content to avoid duplication
  bodyContent = bodyContent.replace(/<script>[\s\S]*?<\/script>/gi, '')
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
    </>
  )
}
