import React, { memo } from 'react'

function UseCallbakcB({ Learning, count }) {
  console.log("child component");
  return (
    <div>

    </div>
  )
}

export default memo(UseCallbakcB);