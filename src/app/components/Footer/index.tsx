import CheckboxAgreement from "./children/CheckboxAgreement";
import EmailInput from "./children/EmailInput";
import styles from "./styles.module.css";
import TextArea from "./children/TextArea/index";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Заполните форму</div>
        <div className={styles.form}>
          <TextArea />
          <div className={styles.emailBlock}>
            <EmailInput />
            <CheckboxAgreement />
            <button className={styles.sendFormButton}>Отправить</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
