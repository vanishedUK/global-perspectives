import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], count: 0 };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=39c3025e706146f99c1db7b6e2295f6e`
    );
    const data = await response.json();

    const w = { width: "400px" };
    const article = data.articles.map((e) => {
      return (
        <div class="p-8">
          {/* <!--Card 1--> */}
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={e.urlToImage} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{e.title}</div>
              <p class="text-gray-700 text-base">{e.description}</p>
              <button class="font-bold text-xl mb-2">
                {" "}
                <a href={e.url}>Read more</a>
              </button>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #coding
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Akhilesh
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #AI
              </span>
            </div>
          </div>
        </div>
      );
    });

    this.setState({ news: article });
  }

  render() {
    return (
      <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
        {this.state.article}{" "}
      </div>
    );
  }
}
