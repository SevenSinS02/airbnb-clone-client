import React, { FunctionComponent } from 'react'
import { Alert, Divider, Skeleton } from 'antd'
import './styles/ListingsSkeleton.css'

interface Props {
  title: string
  error?: boolean
}

export const ListingsSkeleton: FunctionComponent<Props> = ({ title, error = false }) => {
  const errorAlert = error ? (
    <Alert
      type="error"
      message="Uh oh! Something went Wrong - please try again later :("
      className="listings-skeleton__error"
    />
  ) : null

  return (
    <div className="listings-skeleton">
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
    </div>
  )
}
