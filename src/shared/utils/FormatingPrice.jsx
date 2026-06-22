
export default ({ price, tomanSize = "14px", className = null }) => {

       return (
              <span className={className}>
                     {Number(price).toLocaleString("fa")}
                     &nbsp;
                     &nbsp;
                     <span style={{ fontSize: tomanSize }}> تومان </span>
              </span>
       )
}