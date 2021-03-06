// @flow
import type {Route, Segment} from './types'

const VALID_PARAM_SEGMENT = /^[a-zA-Z0-9_-]+$/

function createSegment(segment: string): ?Segment {
  if (!segment) {
    return null
  }
  if (segment.startsWith(':')) {
    const paramName = segment.substring(1)
    if (!VALID_PARAM_SEGMENT.test(paramName)) {
      const addendum = segment.includes('*')
        ? ' Splats are not supported. Consider using child routes instead'
        : ''
      // eslint-disable-next-line no-console
      console.error(
        new Error(`Warning: Param segments "${segment}" includes invalid characters.${addendum}`)
      )
    }
    return {type: 'param', name: paramName}
  }
  return {type: 'dir', name: segment}
}

export default function parseRoute(route: string): Route {
  const [pathname] = route.split('?')

  const segments: Segment[] = pathname
    .split('/')
    .map(createSegment)
    .filter(Boolean)

  return {
    raw: route,
    segments: segments
  }
}
