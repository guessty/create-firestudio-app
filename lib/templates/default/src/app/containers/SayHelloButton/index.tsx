import * as React from 'react'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
//
import { api } from '@store/actions'
import { CUSTOM_FUNCTION_API } from '@config/apiRoutes'
//

interface ISayHelloButtonProps {
  request(requestConfig: object, takeResponse?: string): Promise<{data: string}>
}

const mapDisptachToProps = dispatch => ({
  request: (requestConfig, takeResponse) => dispatch(api.request(requestConfig, takeResponse)),
})

class SayHelloButton extends React.Component<ISayHelloButtonProps> {
  handleClick = () => {
    const { request } = this.props
    request({
      method: 'get',
      url: CUSTOM_FUNCTION_API,
    }, 'last')
      .then(response => {
        toastr.light('Firebot', response.data, {
          icon: (<img src="/static/firestudio-logo.png" alt="logo" width={40} />),
          status: 'warning',
        })
      })
  }
  render() {
    return (
      <button onClick={this.handleClick}>Say Hello</button>
    )
  }
}

export default connect(null, mapDisptachToProps)(SayHelloButton)
