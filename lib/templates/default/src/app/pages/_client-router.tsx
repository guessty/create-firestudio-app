import * as React from 'react'
import { Flex } from 'react-grid-flexbox'
import ErrorPage from 'firestudio/error'
//
import AppLayout from '@layouts/App'
import * as Router from '@router'
//

interface IClientRouterProps {
  statusCode?: number
  router?: {
    asPath: string,
  }
}

interface IClientRouterState {
  statusCode?: number
  ready: boolean
}

class ClientRouter extends React.Component<IClientRouterProps, IClientRouterState> {
  static getInitialProps(props) {
    const { res, err, ctx } = props
    const statusCode = this.getStatusCode(res, err)
    return { ctx, statusCode }
  }

  static getStatusCode = (res, err) => {
    if (res) {
      return res.statusCode
    }
    if (err) {
      return err.statusCode
    }
    return null
  }

  constructor(props: IClientRouterProps) {
    super(props)
    const { statusCode } = this.props
    this.state = {
      ready: statusCode ? true : false,
      statusCode,
    }
  }

  componentDidMount() {
    const { router } = this.props
    const potentialMatches = Router.routes.filter(route => route.regex.test(router.asPath))
    if (potentialMatches.length === 1) {
      this.redirectToClientPath(router.asPath)
    } else {
      this.setState({
        ready: true,
        statusCode: 404,
      })
    }
  }

  redirectToClientPath = path => {
    Router.Router.pushRoute(path)
  }

  render() {
    const { ready, statusCode } = this.state
    return ready ? (
      <ErrorPage statusCode={statusCode} />
    ) : (
      <AppLayout>
        <Flex gutter="50px" incGutterEdges={true} vAlign="middle" hAlign="center">
          <h2>Loading...</h2>
        </Flex>
      </AppLayout>
    )
  }
}

export default ClientRouter
