export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const EventsPartsFragmentDoc = gql`
    fragment EventsParts on Events {
  __typename
  title
  date
  location
  role
  url
  recap
  featured
}
    `;
export const WritingsPartsFragmentDoc = gql`
    fragment WritingsParts on Writings {
  __typename
  title
  outlet
  year
  url
  summary
  format
  featured
}
    `;
export const TalksPartsFragmentDoc = gql`
    fragment TalksParts on Talks {
  __typename
  title
  description
  formats
  order
}
    `;
export const TestimonialsPartsFragmentDoc = gql`
    fragment TestimonialsParts on Testimonials {
  __typename
  quote
  name
  role
  organisation
  type
}
    `;
export const SitePartsFragmentDoc = gql`
    fragment SiteParts on Site {
  __typename
  hero_line1
  hero_line2
  hero_sub
  tagline
}
    `;
export const EventsDocument = gql`
    query events($relativePath: String!) {
  events(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EventsParts
  }
}
    ${EventsPartsFragmentDoc}`;
export const EventsConnectionDocument = gql`
    query eventsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EventsFilter) {
  eventsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EventsParts
      }
    }
  }
}
    ${EventsPartsFragmentDoc}`;
export const WritingsDocument = gql`
    query writings($relativePath: String!) {
  writings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...WritingsParts
  }
}
    ${WritingsPartsFragmentDoc}`;
export const WritingsConnectionDocument = gql`
    query writingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: WritingsFilter) {
  writingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...WritingsParts
      }
    }
  }
}
    ${WritingsPartsFragmentDoc}`;
export const TalksDocument = gql`
    query talks($relativePath: String!) {
  talks(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TalksParts
  }
}
    ${TalksPartsFragmentDoc}`;
export const TalksConnectionDocument = gql`
    query talksConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TalksFilter) {
  talksConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TalksParts
      }
    }
  }
}
    ${TalksPartsFragmentDoc}`;
export const TestimonialsDocument = gql`
    query testimonials($relativePath: String!) {
  testimonials(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TestimonialsParts
  }
}
    ${TestimonialsPartsFragmentDoc}`;
export const TestimonialsConnectionDocument = gql`
    query testimonialsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TestimonialsFilter) {
  testimonialsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TestimonialsParts
      }
    }
  }
}
    ${TestimonialsPartsFragmentDoc}`;
export const SiteDocument = gql`
    query site($relativePath: String!) {
  site(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteParts
  }
}
    ${SitePartsFragmentDoc}`;
export const SiteConnectionDocument = gql`
    query siteConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteFilter) {
  siteConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteParts
      }
    }
  }
}
    ${SitePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    events(variables, options) {
      return requester(EventsDocument, variables, options);
    },
    eventsConnection(variables, options) {
      return requester(EventsConnectionDocument, variables, options);
    },
    writings(variables, options) {
      return requester(WritingsDocument, variables, options);
    },
    writingsConnection(variables, options) {
      return requester(WritingsConnectionDocument, variables, options);
    },
    talks(variables, options) {
      return requester(TalksDocument, variables, options);
    },
    talksConnection(variables, options) {
      return requester(TalksConnectionDocument, variables, options);
    },
    testimonials(variables, options) {
      return requester(TestimonialsDocument, variables, options);
    },
    testimonialsConnection(variables, options) {
      return requester(TestimonialsConnectionDocument, variables, options);
    },
    site(variables, options) {
      return requester(SiteDocument, variables, options);
    },
    siteConnection(variables, options) {
      return requester(SiteConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/e76c03ef-4caf-445c-a0a4-b4aab6854e5a/github/master",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
