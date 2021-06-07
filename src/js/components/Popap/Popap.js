import React from 'react'
import { connect } from 'react-redux'
import { setIsOpenPopap, setOnClosePopap } from '../../redux/PopapReducer/action'


const Popap = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onclick={() => setIsOpenPopap(true)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Test
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onclick={() => setIsOpenPopap(true)}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    )
}
const mapStateToProps = state => {
    return state.popap
} 

const mapDispatchToProps = {
    setIsOpenPopap
}
export default connect(mapStateToProps, mapDispatchToProps)(Popap)