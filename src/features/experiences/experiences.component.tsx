import { css, cx } from '@styles/css';
import { flex } from '@styles/patterns';

const companies = [
  {
    key: 'mgs',
    label: 'My Groom Service Linkedin page',
    url: 'https://linkedin.com/company/my-groom-service/',
  },
  {
    key: 'pytheas',
    label: 'Pytheas Navigation Linkedin page',
    url: 'https://linkedin.com/company/pytheasnavigation/',
  },
  {
    key: 'airbus',
    label: 'Airbus Helicopters Linkedin page',
    url: 'https://linkedin.com/company/airbus-helicopters/',
  },
  {
    key: 'ssg',
    label: 'Sopra Steria Linkedin page',
    url: 'https://linkedin.com/company/soprasteria/',
  },
];

export function Experiences() {
  return (
    <section
      className={css({
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
      })}
    >
      <h2>Previous clients</h2>
      <div
        className={flex({
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: { base: 'space-between', xlDown: 'center' },
          gap: '5rem',
        })}
      >
        {companies.map((company) => (
          <a key={company.key} href={company.url} aria-label={company.label}>
            <div className={cx('mask', `company-logo-${company.key}`)}>
              <div
                className={css({
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                  bg: { base: 'text', _hover: 'links' },
                })}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
