import * as React from 'react';
import { connect } from 'react-redux'
import { setIsOpenPopap, TSetIsOpenPopap, TSetOnClosePopap, TSetOnSavePopap } from '../../redux/PopapReducer/actions'
import { IRootReducerState } from '../../redux/rootReducer';


export interface IPopapProps {
  isOpen?: boolean
  title?: string | JSX.Element
  content?: string | JSX.Element
  isShowFooter?: boolean
  onSave?: () => void
  onClose?: () => void
  setIsOpenPopap?: TSetIsOpenPopap,
  saveBtnText?: any
  closeBtnText?: any
  setTitlePopap?: string | JSX.Element
}

const Popap = ({
  isOpen = false,
  title = '',
  content = '',
  isShowFooter = true,
  onSave = () => false,
  onClose = () => false,
  setIsOpenPopap,
  saveBtnText = 'Сохранить',
  closeBtnText = 'Закрыть',
}: IPopapProps) => {

  React.useEffect(() => {
    console.log({ title })
  }, [title])
  return (
    <React.Fragment>
      {isOpen &&
        <React.Fragment>
          <div className="modal-backdrop fade show" onClick={() => setIsOpenPopap(false)}></div>
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
                {isShowFooter &&
                  <div className="modal-footer">
                    <button type="button" className="btn btn-link" data-dismiss="modal" onClick={() => setIsOpenPopap(false)}>{closeBtnText}</button>
                    <button type="button" className="btn btn-primary ml-auto" onClick={() => onSave()}>{saveBtnText}</button>
                  </div>
                }
              </div>
            </div>
          </div>

        </React.Fragment>
      }
    </React.Fragment>
  )
}
const mapStateToProps = (state: IRootReducerState) => {
  return state.popap
}

const mapDispatchToProps = {
  setIsOpenPopap
}
export default connect(mapStateToProps, mapDispatchToProps)(Popap)