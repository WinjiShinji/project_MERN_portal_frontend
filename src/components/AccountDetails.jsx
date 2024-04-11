import AccountDelete from "./AccountDelete"
import AccountPasswordChange from "./AccountPasswordChange"
import AccountUsername from "./AccountUsername"

const AccountDetails = () => {
  return (
    <section className="acc_details">
      <AccountUsername />
      <AccountPasswordChange />
      <AccountDelete />
    </section>
  )
}

export default AccountDetails