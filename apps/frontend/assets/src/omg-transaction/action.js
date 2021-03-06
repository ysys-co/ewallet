import * as transactionService from '../services/transactionService'
import {
  createActionCreator,
  createPaginationActionCreator
} from '../utils/createActionCreator'
export const transfer = ({
  fromAddress,
  toAddress,
  tokenId,
  fromTokenId,
  toTokenId,
  fromAmount,
  toAmount,
  amount,
  exchangeAddress
}) =>
  createActionCreator({
    actionName: 'TRANSACTION',
    action: 'CREATE',
    service: () =>
      transactionService.transfer({
        fromAddress,
        toAddress,
        tokenId,
        fromTokenId,
        toTokenId,
        fromAmount,
        toAmount,
        amount,
        exchangeAddress
      })
  })

export const getUserTransactions = ({
  userId,
  page,
  search,
  searchTerms,
  perPage,
  cacheKey,
  matchAll,
  matchAny
}) =>
  createPaginationActionCreator({
    actionName: 'TRANSACTIONS',
    action: 'REQUEST',
    service: () =>
      transactionService.getUserTransactions({
        userId,
        perPage,
        page,
        sort: { by: 'created_at', dir: 'desc' },
        search,
        searchTerms,
        matchAll,
        matchAny
      }),
    cacheKey
  })
export const getTransactions = ({
  page,
  search,
  searchTerms,
  perPage,
  cacheKey,
  matchAll,
  matchAny
}) =>
  createPaginationActionCreator({
    actionName: 'TRANSACTIONS',
    action: 'REQUEST',
    service: () =>
      transactionService.getAllTransactions({
        perPage,
        page,
        sort: { by: 'created_at', dir: 'desc' },
        search,
        searchTerms,
        matchAll,
        matchAny
      }),
    cacheKey
  })

export const getTransactionById = id =>
  createActionCreator({
    actionName: 'TRANSACTION',
    action: 'REQUEST',
    service: () => transactionService.getTransactionById(id)
  })

export const exportTransaction = query =>
  createActionCreator({
    actionName: 'TRANSACTIONS',
    action: 'EXPORT',
    service: () => transactionService.exportTransaction(query)
  })

export const calculate = ({ fromTokenId, toTokenId, fromAmount, toAmount }) =>
  createActionCreator({
    actionName: 'TRANSACTION',
    action: 'CALCULATE',
    service: () =>
      transactionService.calculate({
        fromTokenId,
        toTokenId,
        fromAmount,
        toAmount
      })
  })
