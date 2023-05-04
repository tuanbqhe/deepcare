export interface CommonPagingResponseInterface{
  total: number
  totalPage: number
  currentPage: number
  nextPage: number
  data: [any]
}