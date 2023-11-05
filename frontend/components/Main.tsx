import React, { FC, RefObject, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

interface MainProps {
  navbarRef: RefObject<HTMLDivElement>
  footerRef: RefObject<HTMLDivElement>
  children: any
}

const Main: FC<MainProps> = ({ navbarRef, footerRef, children }) => {
  const { push, pathname } = useRouter();
  // const [shouldRender, setShouldRender] = useState<boolean>(false)
  const [topOffset, setTopOffset] = useState<number>(0)
  const [bottomOffset, setBottomOffset] = useState<number>(0)

  // const isAuthenticated = useSelector((state: any) => state.reducer.user.token)

  useEffect(() => {
    if (navbarRef?.current) {
      setTopOffset(navbarRef.current.getClientRects()[0].height)
    }
    if (footerRef?.current) {
      setBottomOffset(footerRef.current.getClientRects()[0].height)
    }
  }, [navbarRef?.current, footerRef?.current])

  return (
    <div className=" bg-white" style={{ minHeight: `calc(100vh - ${topOffset}px - ${bottomOffset}px)` }}>
      {children}
    </div>
  )
}

export default Main