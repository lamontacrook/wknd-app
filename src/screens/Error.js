import { Theme } from "../theme";

const GraphQLSetupError = `Validation error of type FieldUndefined: Field 'adventureList' in type 'QueryType' is undefined @ 'adventureList'`;
const setupErrorMessage = `The Adventures, Articles Content Fragment Models are either not created and installed, or need to be resaved.`
const GlobalEndpointError = `Unexpected token < in JSON at position 0`;
const globalEndpointMessage = `The global GraphQL endpoint appears to not exist or not be setup.`

export default function ErrorScreen({ error }) {
  try {
    return (
      <div className="content">
        <h1>Error</h1>
        <pre style={styles.pre}>{error}</pre>
        {error === GraphQLSetupError && <span>{setupErrorMessage}</span>}
        {error === GraphQLSetupError && <a style={styles.a} href="/libs/dam/cfm/models/console/content/models.html/conf">Setup Content Fragments</a>}

        {error === GlobalEndpointError && <span>{globalEndpointMessage}</span>}
        {error === GlobalEndpointError && <a style={styles.a} href="/libs/cq/graphql/sites/admin/content/console.html">Setup Global GraphQL Endpoint</a>}
      </div>
    );
  } catch (e) {
    return <div>Error with the Error</div>
  }
}

const styles = {
  pre: {
    border: "1px solid rgba(255, 255, 255, .1)",
    borderRadius: "4px",
    padding: "1rem",
    width: "120ch",
    whiteSpace: "normal",
  },
  a: {
    color: Theme.colors.text
  }
}