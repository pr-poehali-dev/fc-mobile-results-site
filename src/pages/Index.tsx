import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("matches");

  // Mock data
  const recentMatches = [
    {
      id: 1,
      player: "GameMaster_2024",
      score: "3-1",
      opponent: "AI_Pro",
      date: "2024-01-15",
      result: "win",
    },
    {
      id: 2,
      player: "FC_Legend",
      score: "2-2",
      opponent: "SkillShot_99",
      date: "2024-01-15",
      result: "draw",
    },
    {
      id: 3,
      player: "SoccerKing",
      score: "1-4",
      opponent: "TopPlayer",
      date: "2024-01-14",
      result: "loss",
    },
  ];

  const topPlayers = [
    { rank: 1, name: "GameMaster_2024", rating: 2450, wins: 156, losses: 23 },
    { rank: 2, name: "FC_Legend", rating: 2380, wins: 142, losses: 28 },
    { rank: 3, name: "SoccerKing", rating: 2320, wins: 134, losses: 35 },
    { rank: 4, name: "SkillShot_99", rating: 2290, wins: 128, losses: 41 },
    { rank: 5, name: "TopPlayer", rating: 2250, wins: 119, losses: 38 },
  ];

  return (
    <div className="min-h-screen gamer-gradient">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/img/030076ae-a966-4d96-b78b-b2e84ec9dcc2.jpg"
                alt="FC Mobile Logo"
                className="w-10 h-10 rounded-lg"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                FC Mobile Arena
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="gaming-border hover:neon-glow transition-all duration-300"
              >
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 neon-glow">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить матч
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Арена FC Mobile
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Делитесь результатами матчей, соревнуйтесь с игроками со всего мира
            и поднимайтесь в рейтинге FC Mobile
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 neon-glow"
            >
              <Icon name="Trophy" size={20} className="mr-2" />
              Загрузить результат
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gaming-border hover:neon-glow transition-all duration-300"
            >
              <Icon name="BarChart3" size={20} className="mr-2" />
              Посмотреть рейтинг
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  size={32}
                  className="mx-auto mb-2 text-green-500"
                />
                <div className="text-2xl font-bold">12,543</div>
                <div className="text-sm text-muted-foreground">
                  Активных игроков
                </div>
              </CardContent>
            </Card>
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Gamepad2"
                  size={32}
                  className="mx-auto mb-2 text-blue-500"
                />
                <div className="text-2xl font-bold">89,234</div>
                <div className="text-sm text-muted-foreground">
                  Сыгранных матчей
                </div>
              </CardContent>
            </Card>
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Trophy"
                  size={32}
                  className="mx-auto mb-2 text-yellow-500"
                />
                <div className="text-2xl font-bold">1,456</div>
                <div className="text-sm text-muted-foreground">Турниров</div>
              </CardContent>
            </Card>
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Target"
                  size={32}
                  className="mx-auto mb-2 text-red-500"
                />
                <div className="text-2xl font-bold">234,567</div>
                <div className="text-sm text-muted-foreground">
                  Голов забито
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Match Upload Form */}
            <Card className="gaming-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Upload"
                    size={20}
                    className="mr-2 text-green-500"
                  />
                  Загрузить результат матча
                </CardTitle>
                <CardDescription>
                  Поделитесь результатом вашего последнего матча
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="player-name">Ваш игровой ник</Label>
                  <Input
                    id="player-name"
                    placeholder="Введите ваш ник"
                    className="gaming-border"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="your-score">Ваши голы</Label>
                    <Input
                      id="your-score"
                      type="number"
                      placeholder="0"
                      className="gaming-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="opponent-score">Голы соперника</Label>
                    <Input
                      id="opponent-score"
                      type="number"
                      placeholder="0"
                      className="gaming-border"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="opponent-name">Ник соперника</Label>
                  <Input
                    id="opponent-name"
                    placeholder="Ник соперника"
                    className="gaming-border"
                  />
                </div>
                <div>
                  <Label htmlFor="match-type">Тип матча</Label>
                  <Select>
                    <SelectTrigger className="gaming-border">
                      <SelectValue placeholder="Выберите тип матча" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ranked">Рейтинговый</SelectItem>
                      <SelectItem value="casual">Обычный</SelectItem>
                      <SelectItem value="tournament">Турнир</SelectItem>
                      <SelectItem value="friendly">Товарищеский</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 neon-glow">
                  <Icon name="Send" size={16} className="mr-2" />
                  Опубликовать результат
                </Button>
              </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card className="gaming-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-blue-500" />
                  Последние матчи
                </CardTitle>
                <CardDescription>
                  Свежие результаты от игроков сообщества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match) => (
                    <div
                      key={match.id}
                      className="flex items-center justify-between p-3 rounded-lg gaming-border bg-background/20"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                          <Icon name="User" size={16} />
                        </div>
                        <div>
                          <div className="font-medium">{match.player}</div>
                          <div className="text-sm text-muted-foreground">
                            {match.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{match.score}</div>
                        <Badge
                          variant={
                            match.result === "win"
                              ? "default"
                              : match.result === "draw"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {match.result === "win"
                            ? "Победа"
                            : match.result === "draw"
                              ? "Ничья"
                              : "Поражение"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Players */}
            <Card className="gaming-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Crown"
                    size={20}
                    className="mr-2 text-yellow-500"
                  />
                  Топ игроков
                </CardTitle>
                <CardDescription>Лидеры рейтинга FC Mobile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPlayers.map((player) => (
                    <div
                      key={player.rank}
                      className="flex items-center justify-between p-3 rounded-lg gaming-border bg-background/20"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            player.rank === 1
                              ? "bg-yellow-500 text-black"
                              : player.rank === 2
                                ? "bg-gray-400 text-black"
                                : player.rank === 3
                                  ? "bg-orange-500 text-black"
                                  : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {player.rank}
                        </div>
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {player.wins}П / {player.losses}Л
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-500">
                          {player.rating}
                        </div>
                        <Progress
                          value={
                            (player.wins / (player.wins + player.losses)) * 100
                          }
                          className="w-16 h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Возможности платформы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Icon
                  name="BarChart3"
                  size={48}
                  className="mx-auto mb-4 text-green-500"
                />
                <h4 className="text-lg font-semibold mb-2">Статистика</h4>
                <p className="text-sm text-muted-foreground">
                  Детальная аналитика ваших матчей и прогресса
                </p>
              </CardContent>
            </Card>
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-blue-500"
                />
                <h4 className="text-lg font-semibold mb-2">Сообщество</h4>
                <p className="text-sm text-muted-foreground">
                  Общайтесь с игроками и находите достойных соперников
                </p>
              </CardContent>
            </Card>
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Icon
                  name="Trophy"
                  size={48}
                  className="mx-auto mb-4 text-yellow-500"
                />
                <h4 className="text-lg font-semibold mb-2">Турниры</h4>
                <p className="text-sm text-muted-foreground">
                  Участвуйте в турнирах и зарабатывайте награды
                </p>
              </CardContent>
            </Card>
            <Card className="gaming-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Icon
                  name="Target"
                  size={48}
                  className="mx-auto mb-4 text-red-500"
                />
                <h4 className="text-lg font-semibold mb-2">Достижения</h4>
                <p className="text-sm text-muted-foreground">
                  Открывайте достижения и получайте звания
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/img/030076ae-a966-4d96-b78b-b2e84ec9dcc2.jpg"
                  alt="FC Mobile Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="font-bold">FC Mobile Arena</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для игроков FC Mobile. Делитесь результатами и
                соревнуйтесь!
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Игра</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Рейтинги
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Турниры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Статистика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Достижения
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Сообщество</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Форум
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    VK
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Обратная связь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О проекте
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 FC Mobile Arena. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
