import * as React from "react";
import { Card } from "antd";
import { withFindListings, WithFindListings } from "@airbnb_clone/controller";

const { Meta } = Card;

class C extends React.PureComponent<WithFindListings> {
  public render() {
    const { listings, loading } = this.props;
    if (loading) {
      return <div>...loading</div>;
    }
    return (
      <div>
        {listings.map(listing => (
          <Card
            key={`${listing.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={<img alt="listing picture" src={listing.pictureUrl} />}
          >
            <Meta description={listing.name} title={listing.name} />
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingsConnector = withFindListings(C);
