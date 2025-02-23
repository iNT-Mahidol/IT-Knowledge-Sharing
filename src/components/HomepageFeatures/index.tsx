import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'เข้าถึงง่าย เรียนรู้ได้ทันที',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        iNT IT Knowledge Sharing ถูกออกแบบมาให้ใช้งานง่าย ไม่ว่าคุณจะเป็นมือใหม่หรือผู้เชี่ยวชาญก็สามารถเข้าถึงความรู้และเรียนรู้ได้ทันที
      </>
    ),
  },
  {
    title: 'มุ่งเน้นเนื้อหาที่ตรงประเด็น',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        เราคัดสรรเนื้อหาที่ตรงประเด็นและเป็นประโยชน์ต่อการทำงานของคุณ เพื่อให้คุณสามารถนำความรู้ไปประยุกต์ใช้ได้จริง
      </>
    ),
  },
  {
    title: 'ขับเคลื่อนด้วยเทคโนโลยีที่ทันสมัย',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        เว็บไซต์ของเราพัฒนาด้วย React ซึ่งเป็นเทคโนโลยีที่ทันสมัยและมีประสิทธิภาพ เพื่อให้คุณได้รับประสบการณ์การใช้งานที่ดีที่สุด
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
