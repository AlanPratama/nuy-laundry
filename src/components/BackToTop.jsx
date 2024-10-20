import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BackToTop = () => {
  return (
    <a href='#top' style={{ zIndex: 999 }} className='fixed right-5 bottom-5 grid place-items-center h-10 w-10 bg-deep-purple-accent-400 rounded-md shadow-md'>
      <FontAwesomeIcon icon={faArrowUp} size='lg' color='white' />
    </a>
  )
}
