import React from 'react'

export default function Badge() {
  return (
    <>
    <button type="button" class="btn btn-primary position-relative">
        Message
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                99+
                <span class="visually-hidden">unread messages</span>
        </span>
     </button>
    </>
  )
}
