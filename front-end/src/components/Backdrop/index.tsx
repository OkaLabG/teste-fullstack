interface BackdropProps {
  visible: boolean
}

export default function Backdrop(props: BackdropProps) {
  return <div className={'backdrop' + (props.visible ? '' : ' hidden')} >
    <svg className='loader' width='60' height='60' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M90 45C90 54.5031 86.9915 63.7622 81.4058 71.4503C75.82 79.1385 67.9437 84.8609 58.9058 87.7975C49.8678 90.7342 40.1322 90.7342 31.0942 87.7975C22.0563 84.8609 14.18 79.1385 8.59423 71.4503C3.00847 63.7622 -8.30784e-07 54.5031 0 45C8.30785e-07 35.4969 3.00847 26.2378 8.59424 18.5497C14.18 10.8615 22.0563 5.13906 31.0942 2.20246C40.1322 -0.734153 49.8678 -0.734152 58.9058 2.20246L56.1246 10.762C48.8943 8.41268 41.1058 8.41268 33.8754 10.762C26.645 13.1113 20.344 17.6892 15.8754 23.8397C11.4068 29.9902 9 37.3975 9 45C9 52.6025 11.4068 60.0098 15.8754 66.1603C20.344 72.3108 26.645 76.8887 33.8754 79.238C41.1057 81.5873 48.8942 81.5873 56.1246 79.238C63.355 76.8887 69.656 72.3108 74.1246 66.1603C78.5932 60.0098 81 52.6025 81 45H90Z' fill='white'/>
    </svg>
  </div>
}