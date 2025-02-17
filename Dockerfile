FROM n8nio/n8n:latest

USER root

WORKDIR /home/node/packages/cli
ENTRYPOINT []

# Copy your custom node code into the n8n container
COPY ./packages/nodes-base /home/node/packages/nodes-base

COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]