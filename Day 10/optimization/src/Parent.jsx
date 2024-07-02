import React, {memo} from 'react'

 function Parent() {
    console.log("Parent");
  return (
    <div>Parent</div>
  )
}
// export default React.memo(Parent)
export default memo(Parent);



