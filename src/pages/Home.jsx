
import escolas from "../datasets/top30_pb.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const ranking = [...escolas]
    .sort((a, b) => b.qt_mat_bas - a.qt_mat_bas)
    .slice(0, 3);

  return (
    <Container className="py-5">
      <h1 className="mb-4">Top 3 Instituições de Ensino da Paraíba</h1>

      {ranking.length === 0 ? (
        <p>Nenhuma instituição encontrada no conjunto de dados.</p>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {ranking.map((ie, index) => (
            <Col key={ie.co_entidade}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-semibold">
                    {index + 1}º - {ie.no_entidade}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {ie.no_municipio} / {ie.sg_uf}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Matrículas Básicas:</strong> {ie.qt_mat_bas}
                  </Card.Text>
                  <Card.Text>
                    <strong>Infantil:</strong> {ie.qt_mat_inf} •
                    <strong> Fundamental:</strong> {ie.qt_mat_fund}
                  </Card.Text>
                  <Card.Text>
                    <strong>Médio:</strong> {ie.qt_mat_med} •
                    <strong>Profissional:</strong> {ie.qt_mat_prof}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {ie.no_regiao} • {ie.nu_ano_censo}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Home;
