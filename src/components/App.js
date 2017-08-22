import React from 'react'
import Row from './Row'


class App extends React.Component {
    rows() {
      const obj = [
        {
          code: 'Fuck',
          company: 'DTT',
          price: '14141412'
        },
        {
          code: 'HUHU',
          company: 'Quant Edge',
          price: '124414'
        },
        {
          code: 'luloi',
          company: 'FRAMGIA',
          price: '124141241'
        }
      ];
      return obj.map(o =>{
        return(
          <Row
            code={o.code}
            company={o.company}
            price={o.price}

            />
        )
      });
    }
  render() {
    return(
      <div>
        {this.rows()}
      </div>
    );
  }
}

export default App
