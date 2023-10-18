import React, { memo } from 'react'
import { Drawer } from 'antd'

import { addLookEdit } from './data'
import type { Props } from './type'
import { FormView } from './FormView'

export const RegistrantListPageDrawer = memo<Props>((props) => {
  const { visible, handleFormCancel } = props
  const { state, fields, handleFormAdd, handleFormEdit } = props

  return (
    <Drawer
      width="80%"
      title={`${addLookEdit[state]}: 员工入职登记表`}
      placement="right"
      onClose={handleFormCancel}
      open={visible}
    >
      <FormView {...{ state, handleFormAdd, handleFormEdit, fields }} />
    </Drawer>
  )
})
RegistrantListPageDrawer.displayName = 'RegistrantListPageDrawer'
