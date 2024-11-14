import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [del, setDel] = useState(false);

  function handleDelete() {
    setDel(!del);
    console.log('deleted');
    console.log(del)
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    // console.log(selectedTopic);

  }


  let delItem = <button onClick={handleDelete} id='delete'>Delete</button>

  if (del) {
    delItem = (
      <div id="alert">
        <h3>Are you sure?</h3>
        <p>These changes cant't be reverted</p>
        <button onClick={handleDelete}>Procceed </button>
      </div>
    )
  }


  // console.log('APP COMPONENT RENDERING');


  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (<div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>)
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>) : null} */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}
          {tabContent}

        </section>
        <section>
          {delItem}
        </section>
      </main>
    </div>
  );
}

export default App;
