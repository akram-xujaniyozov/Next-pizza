import { randomUUID } from 'crypto'

export interface Props {
  serviceId?: string
  merchantId?: string
  amount: number
  transactionParam: number
}

export const createClickPaymentUrl = ({
  serviceId,
  merchantId,
  amount,
  transactionParam,
}: Props) => {
  const params = new URLSearchParams({
    service_id: serviceId as string,
    merchant_id: merchantId as string,
    amount: amount.toString(),
    transaction_param: transactionParam.toString(),
  })

  const url = `https://my.click.uz/services/pay?${params.toString()}`

  return { id: randomUUID(), url }
}
