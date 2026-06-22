
export default ({ price, tomanSize = "14px" }) => {

       return (
              <span>
                     {Number(price).toLocaleString("fa")}
                     &nbsp;
                     &nbsp;
                     <span style={{ fontSize: tomanSize }}> تومان </span>
              </span>
       )
}