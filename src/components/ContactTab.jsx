// Desc: ContactTab component
function ContactTab({ contactData }) {
  return (
    <div>
      <p className="mt-auto text-white-50 text-center">
        {contactData.map((contact, index) => (
          <a key={index} className="link" href={contact.href}
            target="_blank"
            rel="noopener noreferrer">
            <i className={contact.icon} style={{ margin: "6px" }}></i>
            {contact.text}</a>
        ))}
      </p>
    </div>
  )
}

export default ContactTab

