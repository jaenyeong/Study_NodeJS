process.on('tick', function (count) {
  console.log('tick 이벤트 발생', count);
});

setTimeout(function () {
  console.log('2초 후 tick 이벤트 전달');

  process.emit('tick', '2');
}, 2000);
