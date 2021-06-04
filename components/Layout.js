function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          body {
            background-color: black;
          }
        `}</style>
      </div>
    )
  }
  
  export default Layout