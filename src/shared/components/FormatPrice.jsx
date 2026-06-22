
export default ({ price }) => {

       return (
              <span>
                     {Number(price).toLocaleString("fa")}
              </span>
       )
}
export const FormatNumber = ({ num }) => {

       return (
              <span>
                     {Number(num).toLocaleString("fa")}
              </span>
       )
}