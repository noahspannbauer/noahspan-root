import { Accordion, AccordionItem, Button, Link } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faPlane, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import SiteNav from './components/siteNav/SiteNav';

const App: React.FC<unknown> = () => {
  return (
    <>
      <SiteNav />
      <div className='flex max-w-[1024px] items-center justify-center'>
        <Accordion selectionMode='multiple' variant='splitted'>
          <AccordionItem key='1' title={<span><FontAwesomeIcon icon={faPlane} /> Flying</span>}>
          
          </AccordionItem>
          <AccordionItem key='2' title={<span><FontAwesomeIcon icon={faPuzzlePiece} /> Components</span>}>
            <p>A small library of custom React components used across sites.</p>

            <p><Button as={Link} color='primary' isExternal href='#' showAnchorIcon>View Storybook</Button></p>

            <p><Button as={Link} color='primary' isExternal href='#' showAnchorIcon anchorIcon={<FontAwesomeIcon icon={faSquareGithub} />}>View Repository</Button></p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default App
