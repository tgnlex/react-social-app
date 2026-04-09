import { css } from '@linaria/core';

function Welcome() {
  
  const welcome = css`
    --pad-x: 0.5em;
    --pad-y: 2em;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: var(--pad-x) var(--pad-y);
  `

  const text = css` 
    --fs-min: clamp(2em, 36px, 2.5em);
    --fs-mid: clamp(2.5em, 48px, 3em);
    --fs-max: clamp(3em, 54px, 3.5em);
    --size: clamp(var(--fs-min), var(--fs-mid), var(--fs-max));

    --decoration: underline    
    --text: inherit;
    --weight: 200;
    --line: 1.2;

    text-decoration: var(--decoration);
    font-weight: var(--weight);
    line-height: var(--line);
    font-size: var(--size);
    color: var(--text);
  `;

  return (
    <div className={welcome}>
      <h1 className={text}>Welcome</h1>
    </div>
  )
}

export default Welcome;
