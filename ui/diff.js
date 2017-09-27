const isAdd = line => line.charAt(0) === '+'
const isRemove = line => line.charAt(0) === '-'

const formatLine = line => line.substring(1)

const Line = props => (
  <div
    className={`line ${isAdd(props.children) ? 'line--add' : ''} ${isRemove(
      props.children
    )
      ? 'line--remove'
      : ''}`}
    aria-label={
      isAdd(props.children) ? (
        'line to add'
      ) : isRemove(props.children) ? (
        'line to remove'
      ) : (
        ''
      )
    }
  >
    {formatLine(props.children)}
    <style jsx>{`
      .line {
        padding: 0.125em 0.5em;
      }
      .line--add {
        background: #e6ffed;
        color: #3bad24;
        font-weight: 600;
      }
      .line--remove {
        background: #ffeef0;
        color: #c91f06;
        font-weight: 600;
      }
    `}</style>
  </div>
)

const format = raw =>
  raw.split('\n').map((line, i) => <Line key={i}>{line}</Line>)

export default props => (
  <div className="diff">
    <pre>
      <code>{format(props.raw)}</code>
    </pre>
    <style jsx>{`
      .diff {
        border: 3px solid black;
        overflow: scroll;
        overflow-y: hidden;
        overflow-x: auto;
        max-width: 100%;
        font-size: 0.9em;
      }
    `}</style>
  </div>
)
