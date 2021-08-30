import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setIsOpenPopap } from '../../redux/PopapReducer/actions'




const Popap = ({
  isOpen = false,
  title = '',
  content = '',
  onSave = () => false,
  onClose = () => false,
  setIsOpenPopap,
  saveBtnText = 'Сохранить',
  closeBtnText = 'Закрыть',
  setTitlePopap
}) => {

  useEffect(() => {
    console.log({ isOpen })
  }, [isOpen]);

  return (
    <React.Fragment>
      {isOpen &&
        <div className="modal fade d-block show">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setIsOpenPopap(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {content}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setIsOpenPopap(false)}>{closeBtnText}</button>
                <button type="button" className="btn btn-primary" onClick={() => onSave()}>{saveBtnText}</button>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}
const mapStateToProps = state => {
  return state.popap
}

const mapDispatchToProps = {
  setIsOpenPopap
}
export default connect(mapStateToProps, mapDispatchToProps)(Popap)