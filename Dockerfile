
FROM jekyll/jekyll:4.2.2

WORKDIR /srv/jekyll

COPY . .
RUN rm Gemfile.lock
RUN rm Gemfile
RUN mv ./GemfileDocker ./Gemfile

RUN bundle install

EXPOSE 4000

CMD ["jekyll", "serve", "--host", "0.0.0.0", "--watch", "--force_polling"]
