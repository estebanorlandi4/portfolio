function Contact({ url, children, ...props }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

export default Contact;
