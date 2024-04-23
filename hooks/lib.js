/**
 * 获取布局信息
 * @param text  class  id 必须全局唯一的名字
 * @returns {Promise<unknown>}
 * @constructor
 */
export const GetRect = (text) => {
  return new Promise((resolve) => {
    const query = uni.createSelectorQuery()
    query
      .select(text)
      .boundingClientRect((data) => {
        resolve({ ...data })
      })
      .exec()
  })
}
