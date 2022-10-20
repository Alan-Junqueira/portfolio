import { useDarkModeContext } from '../../contexts/DarkMode'
import { Aside } from '../Aside'
import * as C from './styled'

export const Layout = () => {
  const { darkMode, setDarkMode } = useDarkModeContext()

  return (
    <C.Container>
      <Aside />
    </C.Container>
  )
}
