import request from '@/util/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getNavList(token) {
  return request({
    url: '/user/navlist',
    method: 'post',
    params: { token }
  })
}

export function getNewToken(token) {
  return request({
    url: '/getToken',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
