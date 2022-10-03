import calcolovincitore from "../vincitore.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faO, faXmark } from '@fortawesome/free-solid-svg-icons'

function turnodi(caselle, prossimo) {
    const vincitore = calcolovincitore(caselle)
    let prox= prossimo ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faO} />
    if (vincitore) {
      return `Vincitore: ${vincitore}`
    } else if (caselle.every(Boolean)) {
      return `Parità`
    } else {
      return (<> Gioca:  {prox} </>)
    }
}
export default turnodi;
