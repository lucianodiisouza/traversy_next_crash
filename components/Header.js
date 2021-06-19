import headerStyles from "../styles/Header.module.css";

export default function Header() {
  const x = 2;
  return (
    <header className={headerStyles}>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest webdev news
      </p>
    </header>
  );
}
