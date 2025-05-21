
FROM jekyll/jekyll:4.2.2

WORKDIR /srv/jekyll

COPY . .
RUN rm Gemfile.lock
RUN rm Gemfile
RUN mv ./GemfileDocker ./Gemfile

RUN bundle install

RUN bundle exec jekyll build

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force_polling"]
