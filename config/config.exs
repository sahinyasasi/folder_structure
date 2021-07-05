# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :react_redux,
  ecto_repos: [ReactRedux.Repo]

# Configures the endpoint
config :react_redux, ReactReduxWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "PwcKwsFrASL9ujE8MV8ZV6MwqyZwPnXHb8vxcGrvvDjXo390v5FRV1PQzTFxzoqh",
  render_errors: [view: ReactReduxWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: ReactRedux.PubSub,
  live_view: [signing_salt: "mZ6D7u7f"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
