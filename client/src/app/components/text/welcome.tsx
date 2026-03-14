import { css } from '@linaria/react';

const welcome = css`
  --pad-x: 0.5em;
  --pad-y: 2em;
  display: flex;
  flex-direction: column;
  place-items: center;

  padding: var(--pad-x) var(--pad-y);
  & h1 {
    --weight: 200;
    --size: 3.5em;
    font-weight: var(--weight);
    font-size: var(--size);
  }
`


function Welcome() {
  returm (
    <div className={welcome}>
      <h1 className="welcome--text">Welcome</h1>
    </div>
  )
}
